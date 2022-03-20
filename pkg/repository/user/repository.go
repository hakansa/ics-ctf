package user

import "github.com/hakansa/ics-ctf/pkg/model"

type Repository interface {
	GetUser(id int64) (*model.User, error)
	GetUserByUsername(username string) (*model.User, error)
	GetUserByUsernameAndPassword(username, password string) (*model.User, error)
	// ....
}
