<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m2 6 5.981 2.392-.639 6.037c-.18.893.06 1.819.65 2.514A3 3 0 0 0 10.373 18a4.33 4.33 0 0 0 4.132-3.57c-.18.893.06 1.819.65 2.514A3 3 0 0 0 17.535 18a4.33 4.33 0 0 0 4.132-3.57L22 9.797m-7.496 4.632.334-3\"/>";
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
