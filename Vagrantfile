
Vagrant.configure("2") do |config|
  
  config.vm.box = "ubuntu/focal64"

  
  config.vm.synced_folder ".", "/vagrant"

  
  config.vm.network "forwarded_port", guest: 3000, host: 3030

  
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook.yml"
  end
end
# Vagrantfile provisioning YOLO environment via Ansible
