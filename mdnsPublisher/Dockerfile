FROM golang:1.17-buster as build

WORKDIR /app

COPY go.* /app/

RUN go mod download

COPY . .

RUN go version

RUN go build -o /app/mdnsPublisher

# Change image appropriately for the board you are using, see options at: https://www.balena.io/docs/reference/base-images/base-images-ref/
FROM balenalib/raspberrypi3-64-debian
COPY --from=build /app/mdnsPublisher /app/

RUN chmod +x /app/mdnsPublisher

CMD [ "/app/mdnsPublisher" ]
