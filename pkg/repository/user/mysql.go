package user

import (
	"database/sql"

	"github.com/hakansa/ics-ctf/pkg/model"
)

type MySQLRepository struct {
	db *sql.DB
}

func NewMySQLRepository(db *sql.DB) *MySQLRepository {
	return &MySQLRepository{db: db}
}

func (m *MySQLRepository) GetUser(id int64) (*model.User, error) {
	panic("not implemented") // TODO: Implement
}

func (m *MySQLRepository) GetUserByUsername(username string) (*model.User, error) {
	panic("not implemented") // TODO: Implement
}

func (m *MySQLRepository) GetUserByUsernameAndPassword(username string, password string) (*model.User, error) {
	panic("not implemented") // TODO: Implement
}
