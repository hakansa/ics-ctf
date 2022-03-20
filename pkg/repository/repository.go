package repository

import "github.com/hakansa/ics-ctf/pkg/repository/user"

type Repository interface {
	GetUserRepository() user.Repository
	// ...
}
