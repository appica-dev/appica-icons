<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.59 18.31A15.57 15.57 0 0 1 10.1 9.1a15.9 15.9 0 0 1 7.43-4.19M11.55 21a9.34 9.34 0 0 1 2.79-7.65 9.5 9.5 0 0 1 6.54-2.85M3 12a9 9 0 0 0 2.636 6.364A9 9 0 0 0 12 21a9 9 0 0 0 6.364-2.636A9 9 0 0 0 21 12a9 9 0 0 0-2.636-6.364A9 9 0 0 0 12 3a9 9 0 0 0-6.364 2.636A9 9 0 0 0 3 12z\"/>";
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
