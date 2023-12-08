import { Config, getConfig } from './deps.ts'

export const DEBUG = false

if (Deno.args[0]) {
   // if args0 = -h or ?, show help then exit
   if (Deno.args[0] === '-h' || Deno.args[0] === '?') {
      console.log(`
   Simple Server Help --
   Usage:
   commandline args:
   -h or ? = this help

   devTools.json:
   BuildTarget: "",
   Port: 80
   `);
      Deno.exit(0)
   }
}

/**
 * required Cfg
 */
const requiredCfg = {
   "TargetFolder": "",
   "Port": 80
} satisfies Config

// gets an existing config, or builds one
const cfg = getConfig('simple', Deno.args, requiredCfg)

export const folder = cfg.TargetFolder || ""
export const port = cfg.Port || 80
