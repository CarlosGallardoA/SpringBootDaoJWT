package com.PracticaSpring.PracticaSpring.Controllers;

import com.PracticaSpring.PracticaSpring.Dao.UsuarioDao;
import com.PracticaSpring.PracticaSpring.Models.Usuario;
import com.PracticaSpring.PracticaSpring.Utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {
    @Autowired
    private UsuarioDao usuarioDao;
    @Autowired
    private JWTUtil jwtUtil;
    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){
        Usuario user = usuarioDao.verficarLogin(usuario);
        if (user != null){
            String tokken = jwtUtil.create(String.valueOf(user.getId()), user.getEmail());
            return tokken;
        }else{
            return "FAIL";
        }
    }
}
