<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 20 9-7m0 0V3m0 10 9 7m-4-8v.015m0-8v.015m4 3.985v.015m-9 10.985v.015m-9-7.015v.015m4-4.015v.015M3 4.015v.015\"/>";
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
