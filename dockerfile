# Utiliza una imagen base ligera de Node.js en Alpine
FROM node:21-alpine3.19

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json para instalar dependencias
COPY package.json .
COPY package-lock.json .

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto 3000
EXPOSE 3000


