package pe.cibertec.cl2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.cibertec.cl2.model.Alumno;
import pe.cibertec.cl2.repository.AlumnoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AlumnoService {

    private final AlumnoRepository alumnoRepository;

    @Autowired
    public AlumnoService(AlumnoRepository alumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    public Alumno crearAlumno(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    public List<Alumno> obtenerTodosLosAlumnos() {
        return alumnoRepository.findAll();
    }

    public Optional<Alumno> obtenerAlumnoPorId(Integer id) {
        return alumnoRepository.findById(id);
    }

    public void eliminarAlumno(Integer id) {
        alumnoRepository.deleteById(id);
    }

    public Alumno actualizarAlumno(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }
}
