<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.41 14.973c-.523-.24-1-.57-1.41-.973a5 5 0 0 0-7 0m0 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v8M5 14v7m15 0 2-2-2-2m-3 0-2 2 2 2\"/>";
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
