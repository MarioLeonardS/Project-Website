const button = document.getElementById("add-Product");
button.addEventListener("click", function () {
  const container = document.getElementById("product-input");

  const wrapper = document.createElement("div");
  wrapper.className = "mt-2";

  wrapper.innerHTML = `
      <label for="product-select" class="text-white">Select Product</label>
      <select name="product-select"
              class="p-1 mx-2 px-2 rounded-md"
              id="selection">
              <option value="">None</option>
              <option value="Bagels">Bagels</option>
              <option value="baguette">Baguatte</option>
              <option value="Bread-Rolls">Bread Rolls</option>
              <option value="Brioche">Brioche</option>
              <option value="Crackers">Crackers</option>
              <option value="crepes">Crepes</option>
              <option value="Galette-de-Rois">Galette de Rois</option>
              <option value="English Muffin">English Muffin</option>
              <option value="Obwarzanek">Obwarzanek Krakowski</option>
              <option value="Pretzel">Pretzel</option>
      </select>

       <label for="quantity" class="text-white">Product Quantity :</label>
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              id="number-quantity"
              class="p-1 ml-2 px-2 rounded-md"
            />
    `;

  container.appendChild(wrapper);
});
