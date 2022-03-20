package service

import "github.com/hakansa/ics-ctf/pkg/repository"

type Service struct {
	repository repository.Repository
}

func New(repo repository.Repository) *Service {
	return &Service{
		repository: repo,
	}
}
