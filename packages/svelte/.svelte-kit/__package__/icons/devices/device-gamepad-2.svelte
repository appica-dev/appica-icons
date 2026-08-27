<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13.97 15 4.067 4.284a2.297 2.297 0 0 0 3.92-2.023L20.36 9.03M7.977 9v2m-1-1h1.999m4.995 0h1.998m-3.996-5h3.496a5.002 5.002 0 0 1 0 10H9.975l-4.011 4.227a2.297 2.297 0 0 1-3.92-2.035L3.678 9.02A5 5 0 0 1 8.577 5z\"/>";
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
