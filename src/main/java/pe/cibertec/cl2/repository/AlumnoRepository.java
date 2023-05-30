package pe.cibertec.cl2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.cibertec.cl2.model.Alumno;

public interface AlumnoRepository extends JpaRepository<Alumno, Integer> {
}
