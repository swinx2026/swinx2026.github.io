$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()

Write-Host "Server started at http://localhost:8080"
Write-Host "Press Ctrl+C to stop the server"

while ($listener.IsListening)
{
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $localPath = $request.Url.LocalPath
    if ($localPath -eq "/")
    {
        $localPath = "/index.html"
    }

    $filePath = Join-Path (Get-Location).Path $localPath.TrimStart("/")

    if (Test-Path $filePath -PathType Leaf)
    {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $content.Length
        $response.OutputStream.Write($content, 0, $content.Length)
    }
    else
    {
        $response.StatusCode = 404
        $errorContent = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.ContentLength64 = $errorContent.Length
        $response.OutputStream.Write($errorContent, 0, $errorContent.Length)
    }

    $response.Close()
}

$listener.Stop()
$listener.Close()