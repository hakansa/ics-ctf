package service

// just an example
func (s *Service) Login(username, password string) error {
	_, err := s.repository.GetUserRepository().GetUserByUsernameAndPassword(username, password)
	if err != nil {
		return err
	}

	return nil
}
