<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.636 19.5a8.72 8.72 0 0 1-2.463-4.499 8.6 8.6 0 0 1 .512-5.077A8.84 8.84 0 0 1 7 5.981 9.16 9.16 0 0 1 12 4.5c1.78 0 3.52.515 5 1.48a8.84 8.84 0 0 1 3.315 3.944 8.6 8.6 0 0 1 .512 5.077 8.73 8.73 0 0 1-2.463 4.499M16 9.381l-4 3.906\"/>";
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
