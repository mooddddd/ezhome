홈페이지 테이블
user

- userid
- userpw
- email
- gender

userpic
board
comment
like
--
src
auth
user
board
comment
like

프사 name = pofilePic

```html
<h3>선택사항</h3>
<table>
  <form method="post" action="/signup" id="picFrm">
    <tr>
      <th>PIC :</th>
      <td><input type="file" name="pofilePic" id="pofilePic" /></td>
    </tr>
    <th><button type="submit">등록</button></th>
  </form>
</table>
```

// 사진 업로드 해서 DB에 저장하는 것 까지 완료 (파일명으로 저장하게 설정했음)

```html
<!-- <script type="text/javascript">
  const loginFrm = document.querySelector("#login");
  frm.addEventListener("submit", async (e) => {
    try {
      e.preventDefault();
      const { userid, userpw } = e.target;
      const response = await axios.post("/auth", {
        userid: userid.value,
        userpw: userpw.value,
      });

      if (response.status === 200) {
        document.cookie = `token=${response.data.token};`;
        location.href = "/";
      }
    } catch (e) {
      alert("아이디랑 패스워드 일치하지 않음");
    }
  });
</script> -->
```
