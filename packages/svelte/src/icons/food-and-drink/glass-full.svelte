<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 21h8m-4-6v6m0-6c3.314 0 6-1.988 6-5m-6 5c-3.314 0-6-1.988-6-5m12 0-1-7H7l-1 7m12 0a5 5 0 0 1-6 0 5 5 0 0 0-6 0\"/>";
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
