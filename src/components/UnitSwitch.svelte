<script>
  import { Unit, UnitStore } from '../stores/UnitStore';

  let isChecked = $UnitStore.unit === Unit.imperial;

  let handleToggle = (e) => {
    UnitStore.set({
      unit: e.target.checked ? Unit.imperial : Unit.metric
    });
  }
</script>


<div class="switch-container">
  <span class="switch-text">C</span>
  <span>
    <input
      class="switch-checkbox"
      bind:checked={isChecked}
      on:change={handleToggle}
      id="switch-new"
      type="checkbox"
    />
    <label class="switch-label" for="switch-new">
      <span class="switch-button" />
    </label>
  </span>
  <span class="switch-text">F</span>
</div>

<style>
  .switch-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 1rem;
  }

  .switch-text {
    font-size: 2rem;
    padding: 1rem;
    color: #fef;
    font-weight: bold;
  }

  .switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
    background: #06d6a0;
  }

  .switch-label .switch-button {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .switch-checkbox:checked + .switch-label {
    background: #ef476f;
  }
  .switch-checkbox:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .switch-label:active .switch-button {
    width: 60px;
  }
</style>
