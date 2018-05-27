class Cockpit {
  constructor (command) {
    this.command = command
  }

  execute () {
    this.command.execute()
  }
}

class Turbine {
  constructor () {
    this.state = false
    this.speed = 0
  }

  on () {
    this.state = true
    this.speed = 100
  }

  off () {
    this.state = false
    this.speed = 0
  }
}

class OnCommand {
  constructor (turbine) {
    this.turbine = turbine
  }

  execute () {
    this.turbine.on()
  }
}

class OffCommand {
  constructor (turbine) {
    this.turbine = turbine
  }

  execute () {
    this.turbine.off()
  }
}

class SpeedUpCommand {
  constructor (turbine) {
    this.turbine = turbine
  }

  execute () {
    if (!this.turbine.state) return

    this.turbine.speed += 100
  }
}

class SpeedDownCommand {
  constructor (turbine) {
    this.turbine = turbine
  }

  execute () {
    if (!this.turbine.state) return

    this.turbine.speed -= 100
  }
}

export { Cockpit, Turbine, OnCommand, OffCommand, SpeedUpCommand, SpeedDownCommand }
