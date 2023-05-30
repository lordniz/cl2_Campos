package pe.cibertec.cl2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.cibertec.cl2.model.Rol;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer>
{
    Rol findByNomrol(String nomrol);
}
