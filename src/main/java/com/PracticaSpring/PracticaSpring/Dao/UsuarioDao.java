package com.PracticaSpring.PracticaSpring.Dao;

import com.PracticaSpring.PracticaSpring.Models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario verficarLogin(Usuario usuario);
}
