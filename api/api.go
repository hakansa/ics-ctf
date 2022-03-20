package api

import "github.com/hakansa/ics-ctf/pkg/service"

type API struct {
	service *service.Service
}

type Config struct {
	Address string `yaml:"address"`
	Cert    string `yaml:"cert"`
	Key     string `yaml:"key"`
}

func New(cfg *Config, svc *service.Service) *API {
	return &API{
		service: svc,
	}
}

func (a *API) Run() error {
	panic("not implemented") // TODO: implement
}
