<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9.739 17.755-5.227-5.177a4.997 4.997 0 1 1 7.495-6.562 4.997 4.997 0 0 1 8.558 5.038m-2.762 9.763-2.17 1.138a.392.392 0 0 1-.568-.41l.415-2.41-1.756-1.705a.389.389 0 0 1 .217-.665l2.426-.352 1.085-2.191a.392.392 0 0 1 .702 0l1.085 2.191 2.427.352a.39.39 0 0 1 .217.665l-1.756 1.705.414 2.409a.39.39 0 0 1-.567.41z\"/>";
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
