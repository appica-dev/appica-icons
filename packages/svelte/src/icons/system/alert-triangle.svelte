<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 9.645v4.04m-1.637-9.503L2.256 17.851a1.95 1.95 0 0 0 .687 2.632 1.9 1.9 0 0 0 .95.267h16.214a1.9 1.9 0 0 0 .948-.267c.288-.171.527-.416.692-.709a1.95 1.95 0 0 0-.005-1.922l-8.106-13.67a1.9 1.9 0 0 0-3.274 0M12 16.713h.01\"/>";
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
