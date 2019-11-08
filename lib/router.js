'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');
var fs = require("fs");

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/images/buta.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/buta.png", "binary");
        res.end(gazou, "binary");
        break;
      }
    case '/images/azarasi.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/azarasi.png", "binary");
        res.end(gazou, "binary");
        break;
      }
    case '/images/hituji.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/hituji.png", "binary");
        res.end(gazou, "binary");
        break;
      }
    case '/images/inu.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/inu.png", "binary");
        res.end(gazou, "binary");
        break;
      }
    case '/images/kuma.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/kuma.png", "binary");
        res.end(gazou, "binary");
        break;
      }
    case '/images/okami.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/okami.png", "binary");
        res.end(gazou, "binary");
        break;
      }
    case '/images/tanuki.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/tanuki.png", "binary");
        res.end(gazou, "binary");
        break;
      }
    case '/images/ww1.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/ww1.png", "binary");
        res.end(gazou, "binary");
        break;
      }
    case '/images/ww2.png':
      {
        res.writeHead(200, {
          'Content-Type': `image/png; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/ww2.png", "binary");
        res.end(gazou, "binary");
        break;
      }
      case '/images/back.png':
        {
          res.writeHead(200, {
            'Content-Type': `image/png; charset=utf-8`
          });
          const gazou = fs.readFileSync("./views/images/back.png", "binary");
          res.end(gazou, "binary");
          break;
        }
    case '/images/404.jpg':
      {
        res.writeHead(200, {
          'Content-Type': `image/jpeg; charset=utf-8`
        });
        const gazou = fs.readFileSync("./views/images/404.jpg", "binary");
        res.end(gazou, "binary");
        break;
      }
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = { route };