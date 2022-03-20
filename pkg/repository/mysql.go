package repository

import (
	"database/sql"

	"github.com/hakansa/ics-ctf/pkg/repository/user"
)

type MySQLRepository struct {
	db *sql.DB

	UserRepository user.Repository
	// ...
}

func NewMySQLRepository(db *sql.DB) *MySQLRepository {
	return &MySQLRepository{db: db}
}

func (m *MySQLRepository) GetUserRepository() user.Repository {
	return m.UserRepository
}
