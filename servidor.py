from http.server import BaseHTTPRequestHandler, HTTPServer

# Define el manejador de las solicitudes HTTP
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Define la respuesta HTTP
        self.send_response(200)  # Código 200 significa que la solicitud fue exitosa
        self.send_header("Content-type", "text/html")
        self.end_headers()

        # Contenido HTML que queremos devolver
        html_content = """<!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Servidor Python</title>
        </head>
        <body>
            <h1>Hola desde un servidor Python</h1>
            <p>Este es un servidor simple que responde a solicitudes GET.</p>
            <img src=https://lh4.googleusercontent.com/Vrf5VUD-g3nJgSJc29YXKEJ7UomJhNi3qkXo6Cie6m-9Mq1GsluJJ6LC9_R2WCqd2_yAXN82MS9xhaTBV5n2OEQu485rPwFOiHdkh4F2ETeINj0Vwrl8e6loHOBy15d1n9L3CZ_8>
        </body>
        </html>"""

        # Escribir el contenido HTML en la respuesta
        self.wfile.write(html_content.encode("utf-8"))

# Configura el servidor
if __name__ == "__main__":
    # Define la dirección y el puerto
    server_address = ("", 8000)  # Escucha en todas las interfaces en el puerto 8000
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)

    print("Servidor corriendo en el puerto 8000...\nhttp://localhost:8000")
    try:
        httpd.serve_forever()  # Mantiene el servidor ejecutándose
    except KeyboardInterrupt:
        print("\nServidor detenido.")
        httpd.server_close()
