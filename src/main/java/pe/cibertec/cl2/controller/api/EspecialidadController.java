package pe.cibertec.cl2.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.cibertec.cl2.model.Especialidad;
import pe.cibertec.cl2.service.EspecialidadService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/especialidades")
public class EspecialidadController {

    private final EspecialidadService especialidadService;

    @Autowired
    public EspecialidadController(EspecialidadService especialidadService) {
        this.especialidadService = especialidadService;
    }

    @PostMapping
    public ResponseEntity<Especialidad> crearEspecialidad(@RequestBody Especialidad especialidad) {
        Especialidad nuevaEspecialidad = especialidadService.crearEspecialidad(especialidad);
        return new ResponseEntity<>(nuevaEspecialidad, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Especialidad>> obtenerTodasLasEspecialidades() {
        List<Especialidad> especialidades = especialidadService.obtenerTodasLasEspecialidades();
        return new ResponseEntity<>(especialidades, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Especialidad> obtenerEspecialidadPorId(@PathVariable Integer id) {
        Optional<Especialidad> especialidad = especialidadService.obtenerEspecialidadPorId(id);
        return especialidad.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEspecialidad(@PathVariable Integer id) {
        especialidadService.eliminarEspecialidad(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Especialidad> actualizarEspecialidad(@PathVariable Integer id,
                                                               @RequestBody Especialidad especialidad) {
        especialidad.setIdespecialidad(id);
        Especialidad especialidadActualizada = especialidadService.actualizarEspecialidad(especialidad);
        return new ResponseEntity<>(especialidadActualizada, HttpStatus.OK);
    }
}
