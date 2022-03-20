package config

import (
	"github.com/hakansa/ics-ctf/api"
	"gopkg.in/yaml.v2"
)

type Config struct {
	API api.Config
}

func Parse(dat []byte) (*Config, error) {
	var cfg Config

	err := yaml.Unmarshal(dat, &cfg)
	if err != nil {
		return nil, err
	}
	return &cfg, nil
}
