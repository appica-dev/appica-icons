<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 12V4.5a1.5 1.5 0 0 0-3 0V13l-1.47-1.47a1.87 1.87 0 0 0-2.28-.28 1.5 1.5 0 0 0-.536 2.022Q6.533 18.282 7 19l.196.3a6 6 0 0 0 5.012 2.7H12h2a6 6 0 0 0 6-6v-4.5a1.5 1.5 0 0 0-3 0m-6-6v-2a1.5 1.5 0 1 1 3 0V12m0-6.5a1.5 1.5 0 1 1 3 0V12\"/>";
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
