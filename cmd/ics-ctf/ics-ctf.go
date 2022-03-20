package main

import (
	"io/ioutil"

	"github.com/hakansa/ics-ctf/api"
	"github.com/hakansa/ics-ctf/pkg/config"
	"github.com/hakansa/ics-ctf/pkg/repository"
	"github.com/hakansa/ics-ctf/pkg/service"
)

func main() {

	// parse config
	dat, err := ioutil.ReadFile("config.yml")
	if err != nil {
		panic(err)
	}

	cfg, err := config.Parse(dat)
	if err != nil {
		panic(err)
	}

	repo := repository.NewMySQLRepository(nil)

	svc := service.New(repo)

	apiInstance := api.New(&cfg.API, svc)

	err = apiInstance.Run()
	if err != nil {
		panic(err)
	}

}
