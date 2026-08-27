<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zm0-7h4v4h-4zm0-7h4v4h-4zm-7 7h4v4h-4zm0-7h4v4h-4zM3 3h4v4H3z\"/>";
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
