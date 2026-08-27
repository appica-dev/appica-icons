<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v9.5a3.5 3.5 0 1 0 7 0v-9a3.5 3.5 0 1 1 7 0V21m0 0-3-3m3 3 3-3\"/>";
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
