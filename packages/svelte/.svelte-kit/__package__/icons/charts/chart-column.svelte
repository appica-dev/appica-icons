<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 20h3m10 0h3m-9.5 0h3M4 16h3m10 0h3m-9.5 0h3M4 12h3m10 0h3m-9.5 0h3M4 8h3m10 0h3M4 4h3\"/>";
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
