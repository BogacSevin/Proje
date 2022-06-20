<template>
    <div>
    <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>  
  <b-card
    no-body
    style="max-width: 25rem; max-height:50rem; margin-left:39rem"
    img-src="data:image/jpeg;base64,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"
    img-alt="Image"
    img-top
  >
    <b-list-group> 
      <b-list-group-item>Ad Soyad: {{account.FirstName}} {{account.LastName}}</b-list-group-item>
      <b-list-group-item>Email: {{account.Email}}</b-list-group-item>
      <b-list-group-item>Doğum Tarihi: {{account.BirthDate}}</b-list-group-item>
      <b-list-group-item>Hesap Oluşturma Tarihi: {{account.CreatedDate}}</b-list-group-item>
      <b-list-group-item>Aktif: {{account.IsActive}}</b-list-group-item>
    </b-list-group>
  </b-card>
</div>
</template>
<script>

export default {
    name: 'profil',
      props: [
    'account',
  ]
    
}
</script>