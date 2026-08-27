<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8.133 4.317 2.704-1.943a1.99 1.99 0 0 1 2.326 0l8.02 5.763c.695.498.985 1.381.72 2.187l-1.887 5.743m-.981 2.986-.196.595c-.13.393-.38.736-.718.978a2 2 0 0 1-1.163.374H7.042c-.418 0-.825-.13-1.163-.374a1.96 1.96 0 0 1-.718-.978l-3.064-9.324a1.94 1.94 0 0 1 0-1.21c.129-.392.38-.735.719-.977L5.81 5.985M3 3.196l18 17.8\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
