<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.192 2.25c.776 0 1.52.308 2.068.857l7.516 7.517a3.325 3.325 0 0 1 0 4.7l-5.451 5.452a3.324 3.324 0 0 1-4.701 0L3.107 13.26a2.93 2.93 0 0 1-.857-2.068V6.15a3.9 3.9 0 0 1 3.9-3.9zm-3.58 3.412a1.95 1.95 0 0 0-1.945 1.804l-.005.146a1.95 1.95 0 1 0 1.95-1.95\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
