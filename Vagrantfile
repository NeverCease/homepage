# Upload changes
Vagrant.configure("2") do |config|
  config.vm.box = "base"

  config.push.define "ftp" do |push|
    push.host = "inc.sh"
    push.username = "root"
    push.password = "~/.ssh/id_rsa"
    push.secure = true
    push.destination = "/var/www/html"
    push.exclude = "node_modules"
    push.exclude = "Vagrantfile"
  end
end
