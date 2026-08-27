<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.844 4.25H7.156A2.906 2.906 0 0 0 4.25 7.156v9.688a2.906 2.906 0 0 0 2.906 2.906h9.688a2.906 2.906 0 0 0 2.906-2.906V7.156a2.906 2.906 0 0 0-2.906-2.906\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
