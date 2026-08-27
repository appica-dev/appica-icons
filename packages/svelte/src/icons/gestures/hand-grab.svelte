<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 10V7.5a1.5 1.5 0 0 0-3 0V11L6.53 9.53a1.87 1.87 0 0 0-2.28-.28 1.5 1.5 0 0 0-.536 2.022Q6.533 16.282 7 17l.196.3a6 6 0 0 0 5.012 2.7H12h2a6 6 0 0 0 6-6V9.5a1.5 1.5 0 0 0-3 0m-6 0v-3a1.5 1.5 0 1 1 3 0V10m0-2.5a1.5 1.5 0 1 1 3 0V10\"/>";
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
