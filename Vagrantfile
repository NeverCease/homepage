Vagrant.configure("2") do |config|
  config.vm.box = "base"

  config.push.define "ftp" do |push|
    push.destination = "/var/www/html"
    push.dir = "production"
    push.host = "inc.sh"
    push.password = "~/.ssh/id_rsa"
    push.secure = true
    push.username = "root"
  end
end
