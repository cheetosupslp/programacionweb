from PIL import Image
'''
La verdad no me salio, si bien instale Pillow desde el cmd
al parecer como tengo varias versiones de python la version se instalo en una diferente
'''
def arnold_cat_map(image_path, iterations, a=1, b=1):
    try:
        img = Image.open(image_path).convert("RGB")
    except FileNotFoundError:
        print(f"NO SE ENCONTRO NADA EN..'{image_path}'.")
        print("l RUTA O EL NOMBRE NO SON CORRECTO")
        return

    width, height = img.size
    pixels = img.load()

    output_img = Image.new("RGB", (width, height))
    output_pixels = output_img.load()

    size = min(width, height) if width != height else width

    for _ in range(iterations):
        for y in range(size):
            for x in range(size):
                new_x = (x + a * y) % size
                new_y = (b * x + (a * b + 1) * y) % size
                output_pixels[new_x, new_y] = pixels[x, y]
        img = output_img.copy()
        pixels = img.load()

    output_filename = f"flor_arnold_cat_map_output_{iterations}_iterations.png"
    output_img.save(output_filename)
    print(f"Imagen transformada guardada como {output_filename}")

if __name__ == "__main__":
    image_full_path = r"C:\Users\Luis\Pictures\flor.jpg"
    num_iterations = 70
    arnold_cat_map(image_full_path, iterations=num_iterations)
    