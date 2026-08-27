<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.37 14.236C3.53 10.307 3.807 6.62 4.664 3M18.63 9.76c1.837 3.928 1.561 7.615.703 11.236M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-4 0a7 7 0 1 0 14 0 7 7 0 0 0-14 0\"/>";
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
