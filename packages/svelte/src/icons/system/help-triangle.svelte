<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 16.714v.01M10.362 4.182 2.256 17.851a1.95 1.95 0 0 0 .687 2.632 1.9 1.9 0 0 0 .95.267h16.214a1.9 1.9 0 0 0 .948-.267c.288-.171.527-.416.692-.709a1.95 1.95 0 0 0-.005-1.922l-8.106-13.67a1.9 1.9 0 0 0-3.274 0M12 13.684c.45.001.887-.15 1.241-.431a2.038 2.038 0 0 0 .582-2.433 2 2 0 0 0-.908-.956 1.96 1.96 0 0 0-2.415.488\"/>";
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
