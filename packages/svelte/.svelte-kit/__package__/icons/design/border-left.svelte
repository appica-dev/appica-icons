<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 19.99V4m4 0v.01M12 4v.01M16 4v.01M20 4v.01m-8 3.988v.01m8-.01v.01M8 11.995v.01m4-.01v.01m4-.01v.01m4-.01v.01m-8 3.987v.01m8-.01v.01M8 19.99V20m4-.01V20m4-.01V20m4-.01V20\"/>";
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
