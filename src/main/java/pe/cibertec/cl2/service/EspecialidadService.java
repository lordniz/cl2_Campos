package pe.cibertec.cl2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.cibertec.cl2.model.Especialidad;
import pe.cibertec.cl2.repository.EspecialidadRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EspecialidadService {

    private final EspecialidadRepository especialidadRepository;

    @Autowired
    public EspecialidadService(EspecialidadRepository especialidadRepository) {
        this.especialidadRepository = especialidadRepository;
    }

    public Especialidad crearEspecialidad(Especialidad especialidad) {
        return especialidadRepository.save(especialidad);
    }

    public List<Especialidad> obtenerTodasLasEspecialidades() {
        return especialidadRepository.findAll();
    }

    public Optional<Especialidad> obtenerEspecialidadPorId(Integer id) {
        return especialidadRepository.findById(id);
    }

    public void eliminarEspecialidad(Integer id) {
        especialidadRepository.deleteById(id);
    }

    public Especialidad actualizarEspecialidad(Especialidad especialidad) {
        return especialidadRepository.save(especialidad);
    }
}
