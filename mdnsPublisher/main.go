package main

import (
	"os"

	"github.com/hashicorp/mdns"
)

func main() {
	// Setup our service export
	host, _ := os.Hostname()
	info := []string{"Balena cluster service"}
	service, _ := mdns.NewMDNSService(host, "_worker-service._tcp", "", "", 5353, nil, info)

	// Create the mDNS server, defer shutdown
	server, _ := mdns.NewServer(&mdns.Config{Zone: service})
	defer server.Shutdown()
}
