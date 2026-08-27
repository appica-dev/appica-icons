<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 11.995h16M12 4v15.99M4 4v.01M8 4v.01M16 4v.01M20 4v.01M4 7.998v.01m16-.01v.01M4 15.993v.01m16-.01v.01M4 19.99V20m4-.01V20m8-.01V20m4-.01V20\"/>";
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
